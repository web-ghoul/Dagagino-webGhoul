"use client"
import { useFormik } from "formik"
import * as yup from 'yup';
import "./Forms.scss"
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";
import VerifyOTPForm from "./VerifyOTPForm";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { login } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import { handleAlert } from "@/functions/handleAlert";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase"
import { ProfileContext } from "@/context/ProfileContext";
import { handleStartDateAndEndDate } from "@/functions/handleStartDateAndEndDate";
import EditProfileForm from "./EditProfileForm";
import ChangeAvatarForm from "./ChangeAvatarForm";
import ComplaintForm from "./ComplaintForm";
import RegisterForm from "./RegisterForm";
import { UploadImageContext } from "@/context/UploadImageContext";
import { useParams } from 'next/navigation'
import HandleReportDateForm from "./HandleReportDateForm";
import { AnalysisReportContext } from "@/context/AnalysisReportContext";
import { getMostPurchasedClients } from '@/store/mostPurchasedClientsSlice'
import { getMostBoughtProducts } from '@/store/mostBoughtProductsSlice'
import { getMostBoughtFrom } from '@/store/mostBoughtFromSlice'
import { getMostSoldProducts } from '@/store/mostSoldProductsSlice'
import { getProfile } from '@/store/profileSlice'
import { DashboardContext } from "../context/DashboardContext";
import DeleteUserProductForm from "./DeleteUserProductForm";
import { getUserProducts } from "../store/userProductsSlice";
import AddProductForm from "./AddProductForm";
import AddSystemProductForm from "./AddSystemProductForm";
import EditUserProductForm from "./EditUserProductForm";
import ConfirmPendingSaleForm from "./ConfirmPendingSaleForm";
import { getPendingSales } from "../store/pendingSalesSlice";
import { getConfirmedInvoices } from "../store/confirmedInvoicesSlice";
import { getCartOrders } from "../store/cartOrdersSlice";
import CreateInvoiceForm from "./CreateInvoiceForm";
import RemoveProductFromCartForm from "./RemoveProductFromCartForm";
import ClearCartForm from "./ClearCartForm";

const Forms = ({ type, removeProductId, createInvoiceData }) => {
  const { t } = useTranslation()
  const { token, userType, userTypeId, userId, providerTypeId } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const [sendOTP, setSendOTP] = useState(false)
  const [userData, setUserData] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const { profileData, handleCloseEditProfileModal, handleCloseChangeAvatarModal } = useContext(ProfileContext)
  const { deleteUserProductId, editUserProduct, addSystemProduct, handleCloseDeleteUserProductModal, handleCloseEditUserProductModal, pendingSaleId, handleCloseConfirmPendingSaleModal } = useContext(DashboardContext)
  const { avatarForRegister, setAvatarForChange, setAvatarForEdit, avatarForChange, avatarForEdit, handleClearAll } = useContext(UploadImageContext)
  const { cartOrders } = useSelector((state) => state.cartOrders)
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL
  const { id } = useParams()
  const { option } = useContext(AnalysisReportContext)
  const { systemProducts } = useSelector((state) => state.systemProducts)

  //handle Catch Error
  const handleCatchError = (err) => {
    try {
      handleAlert(t("lang") === "ar" ? err.response.data.arError : err.response.data.enError, "error")
    } catch (error) {
      console.log(error)
      handleAlert(t("forms.fetch.public.error"), "error")
    }
  }

  //Check is user Exist or not
  const checkIfUserExist = async (phone) => {
    let exist = false
    await axios(`${process.env.NEXT_PUBLIC_SERVER_URL}/Authentication/CheckUserExist?phone=${phone}`).then((res) => {
      exist = res.data.data
    }).catch((err) => {
      console.log(err)
      exist = false
    })
    return exist
  }

  //Firebase OTP
  const handleSendOTP = async () => {
    try {
      let data;
      if (localStorage.getItem("userData")) {
        data = JSON.parse(localStorage.getItem("userData"))
      } else {
        handleAlert(t("forms.fetch.public_error.message"), "error")
        router.push(`${process.env.NEXT_PUBLIC_HOME_ROUTE}`)
      }
      setUserData(data)
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
      const conf = await signInWithPhoneNumber(auth, data.values.phone, recaptcha)
      handleAlert(t("forms.otp.check_your_phone.message"), "success")
      setConfirmation(conf)
      setSendOTP(true)
    } catch (err) {
      console.log(err)
      handleAlert(t("forms.fetch.public_error.message"), "error")
    }
  }

  useEffect(() => {
    if (type === "verify_otp") {
      handleSendOTP()
    }
  }, [type])

  //Login
  const loginInitialValues = {
    phone: "",
    password: "",
  }

  const loginSchema = yup.object({
    phone: yup.string(t("forms.phone.string")),
    password: yup.string(t("forms.password.string"))
      .min(8, t("forms.password.min"))
      .required(t("forms.password.required")),
  })

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true)
      await axios.post(`${server_url}/Authentication/Login`, values).then((res) => {
        try {
          const token = res.data.data.token
          const user = res.data.data.user
          let userTypeId;
          let userType;
          let providerTypeId;
          const isVerified = jwtDecode(token)
          if (!isVerified) {
            handleAlert(t("forms.fetch.error.jwt.decode"), "error")
          } else {
            console.log(user)
            providerTypeId = user.type._id
            if (user.hasOwnProperty("farm")) {
              userType = 'farm'
              userTypeId = user.farm._id
            } else if (user.hasOwnProperty("supplier")) {
              userType = 'supplier'
              userTypeId = user.supplier._id
            } else if (user.hasOwnProperty("client")) {
              userType = 'client'
              userTypeId = user.client._id
            }
            handleAlert(t("forms.login.success_request.message"), "success")
            dispatch(login({ token, userId: isVerified.id, userType, userTypeId, providerTypeId }))
            router.push(`${process.env.NEXT_PUBLIC_DASHBOARD_ROUTE}/${isVerified.id}`)
          }
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public_error.message"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })


  //Register
  const registerInitialValues = {
    arName: "",
    enName: "",
    email: "",
    address: "",
    arDescription: "",
    enDescription: "",
    clientType: "",
    commercialRegistrationNo: "",
    governorate: "",
    state: "",
    phone: "",
    imageURL: "",
    password: "",
    confirmPassword: ""
  }

  const registerSchema = yup.object({
    arName: yup.string(t("forms.arabic_name.string")).required(t("forms.arabic_name.required")),
    enName: yup.string(t("forms.english_name.string")).required(t("forms.english_name.required")),
    email: yup.string(t("forms.email.string")).email(t("forms.email.email")).required(t("forms.email.required")),
    address: yup.string(t("forms.address.string")).required(t("forms.address.required")),
    governorate: yup.string(t("forms.governorate.string")).required(t("forms.governorate.required")),
    state: yup.string(t("forms.state.string")).required(t("forms.state.required")),
    arDescription: yup.string(t("forms.arabic_description.string")).required(t("forms.arabic_description.required")),
    enDescription: yup.string(t("forms.english_description.string")).required(t("forms.english_description.required")),
    clientType: type === "client" ? yup.string(t("forms.clientType.string")).required(t("forms.clientType.required")) : yup.string(t("forms.clientType.string")),
    commercialRegistrationNo: type !== "client" ? yup.string(t("forms.commercial_number.string")).required(t("forms.commercial_number.required")) : yup.string(t("forms.commercial_number.string")),

    imageURL: yup.string(),
    phone: yup.string(t("forms.phone.string")).required(t("forms.phone.required")),
    password: yup.string(t("forms.password.string"))
      .min(8, t("forms.password.min"))
      .required(t("forms.password.required")),
    confirmPassword: yup.string(t("forms.confirm_password.string")).required(t("forms.confirm_password.required")).oneOf([yup.ref("password"), null], t("forms.confirm_password.match")),
  })

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true)
      const exist = await checkIfUserExist(values.phone)
      if (exist) {
        handleAlert(t("forms.user_exist.message"), "error")
        setLoading(false)
        return;
      }
      values.imageURL = avatarForRegister
      localStorage.setItem("userData", JSON.stringify({ values, type }))
      router.push(`${process.env.NEXT_PUBLIC_VERIFY_OTP_ROUTE}`)
      handleClearAll()
      setLoading(false)
    }
  })


  //Verify OTP
  const verifyOTPInitialValues = {
    otp: "",
  }

  const verifyOTPSchema = yup.object({
    otp: yup.string(t("forms.otp.string")).required(t("forms.otp.required")),
  })

  const verifyOTPFormik = useFormik({
    initialValues: verifyOTPInitialValues,
    validationSchema: verifyOTPSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        await confirmation.confirm(values.otp)
        handleAlert(t("forms.verify_phone_number_successfully.message"), "success")
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "error")
        setLoading(false)
        return;
      }
      await axios.post(`${server_url}/Authentication/${userData.type === "client" ? "ClientRegister" : userData.type === "supplier" ? "SupplierRegister" : "FarmRegister"}`, userData.values).then((res) => {
        handleAlert(t("forms.register.createe_account_successfully.message"), "success")
        router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)
      }).catch((err) => {
        try {
          if (t("lang") === "ar") {
            handleAlert(err.data.arError, "error")
          } else {
            handleAlert(err.data.enError, "error")
          }
        } catch (err) {
          handleCatchError(err)
        }
      })
      setLoading(false)
    }
  })


  //Contact
  const contactInitialValues = {
    name: "",
    email: "",
    message: ""
  }

  const contactSchema = yup.object({
    name: yup.string(t("forms.name.string")).required(t("forms.name.required")),
    email: yup.string(t("forms.email.string")).email(t("forms.email.email")).required(t("forms.email.required")),
    message: yup.string(t("forms.message.string")).required(t("forms.message.required")),
  })

  const contactFormik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      setLoading(true)
      await axios.post(`${server_url}/Contact/ContactUs`, values).then((res) => {
        handleAlert(t("forms.contact.success_request.message"), "success")
      }).catch((err) => {
        try {
          if (t("lang") === "ar") {
            handleAlert(err.data.arError, "error")
          } else {
            handleAlert(err.data.enError, "error")
          }
        } catch (err) {
          handleCatchError(err)
        }
      })
      setLoading(false)
    }
  })


  //Edit Profile
  const editProfileInitialValues = {
    arName: profileData && profileData.arName,
    enName: profileData && profileData.enName,
    email: profileData && profileData.email,
    address: profileData && profileData.address,
    arDescription: profileData && profileData.arDescription,
    enDescription: profileData && profileData.enDescription,
    clientType: profileData && profileData.clientType,
    commercialRegistrationNo: profileData && profileData.commercialRegistrationNo,
    governorate: profileData && profileData.governorate,
    state: profileData && profileData.state,
    imageURL: profileData && profileData.imageURL,
  }

  const editProfileSchema = yup.object({
    arName: yup.string(t("forms.arabic_name.string")).required(t("forms.arabic_name.required")),
    enName: yup.string(t("forms.english_name.string")).required(t("forms.english_name.required")),
    email: yup.string(t("forms.email.string")).email(t("forms.email.email")).required(t("forms.email.required")),
    address: yup.string(t("forms.address.string")).required(t("forms.address.required")),
    arDescription: yup.string(t("forms.arabic_description.string")).required(t("forms.arabic_description.required")),
    enDescription: yup.string(t("forms.english_description.string")).required(t("forms.english_description.required")),
    clientType: userType === "client" ? yup.string(t("forms.clientType.string")).required(t("forms.clientType.required")) : yup.string(t("forms.clientType.string")),
    commercialRegistrationNo: userType !== "client" ? yup.string(t("forms.commercial_number.string")).required(t("forms.commercial_number.required")) : yup.string(t("forms.commercial_number.string")),
    governorate: yup.string(t("forms.governorate.string")).required(t("forms.governorate.required")),
    state: yup.string(t("forms.state.string")).required(t("forms.state.required")),
    imageURL: yup.string(),
  })

  const editProfileFormik = useFormik({
    initialValues: editProfileInitialValues,
    validationSchema: editProfileSchema,
    onSubmit: async (values) => {
      setLoading(true)
      if (type === "edit_profile") {
        values.imageURL = avatarForEdit
      } else if (type === "change_avatar") {
        values.imageURL = avatarForChange
      }
      await axios.put(`${server_url}/Users/UpdateProfile?id=${userId}`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        try {
          handleCloseEditProfileModal()
          handleCloseChangeAvatarModal()
          setAvatarForChange(null)
          setAvatarForEdit(null)
          dispatch(getProfile({ id: userId }))
          handleClearAll()
          if (type === "edit_profile") {
            handleAlert(t("forms.edit_profile_successfully.message"), "success")
          } else if (type === "change_avatar") {
            handleAlert(t("forms.change_avatar_successfully.message"), "success")
          }
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })


  //Handle Report Dates
  const handleReportDatesInitialValues = {
    startDate: handleStartDateAndEndDate().startDate,
    endDate: handleStartDateAndEndDate().endDate
  }

  const handleReportDatesSchema = yup.object({
    startDate: yup.string(t("forms.startDate.string")).required(t("forms.startDate.required")),
    endDate: yup.string(t("forms.endDate.string")).required(t("forms.endDate.required"))
  })

  const handleReportDatesFormik = useFormik({
    initialValues: handleReportDatesInitialValues,
    validationSchema: handleReportDatesSchema,
    onSubmit: async (values) => {
      setLoading(true)
      if (option === 0) {
        await dispatch(getMostPurchasedClients({ values }))
      } else if (option === 1) {
        await dispatch(getMostSoldProducts({ values }))
      } else if (option === 2) {
        await dispatch(getMostBoughtFrom({ values }))
      } else {
        await dispatch(getMostBoughtProducts({ values }))
      }
      setLoading(false)
    }
  })


  //Complaint
  const complaintInitialValues = {
    message: "",
    user: ""
  }

  const complaintSchema = yup.object({
    message: yup.string(t("forms.complaint.string")).required(t("forms.complaint.required")),
    user: yup.string()
  })

  const complaintFormik = useFormik({
    initialValues: complaintInitialValues,
    validationSchema: complaintSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      values.user = id
      await axios.post(`${server_url}/Contact/Report`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        try {
          resetForm()
          handleAlert(t("forms.send_complaint_successfully.message"), "success")
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })


  //Add Product
  const addProductInitialValues = {
    imageURL: "",
    arName: "",
    enName: "",
    arDescription: "",
    enDescription: "",
    stock: "",
    price: "",
    priceAfterDiscount: "",
    category: ""
  }

  const addProductSchema = yup.object({
    imageURL: yup.string().required(),
    arName: yup.string(t("forms.arabic_name.string")).required(t("forms.arabic_name.required")),
    enName: yup.string(t("forms.english_name.string")).required(t("forms.english_name.required")),
    arDescription: yup.string(t("forms.arabic_description.string")).required(t("forms.arabic_description.required")),
    enDescription: yup.string(t("forms.english_description.string")).required(t("forms.english_description.required")),
    stock: yup.string(t("forms.quantity.string")).required(t("forms.quantity.required")),
    price: yup.string(t("forms.price.string")).required(t("forms.price.required")),
    priceAfterDiscount: yup.string(t("forms.priceAfterDiscount.string")),
    category: yup.string(t("forms.category.string")).required(t("forms.category.required"))
  })

  const addProductFormik = useFormik({
    initialValues: addProductInitialValues,
    validationSchema: addProductSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      if (values.imageURL === "") {
        handleAlert(t("forms.image.required"), "error")
        setLoading(false)
        return
      }
      values.providerType = providerTypeId
      await axios.post(`${server_url}/Products/CreateProduct?id=${userId}`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        try {
          resetForm()
          handleAlert(t("forms.add_product_successfully.message"), "success")
          dispatch(getUserProducts())
          handleClearAll()
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })

  const addSystemProductInitialValues = {
    systemProduct: "",
    category: "",
    stock: "",
    price: "",
    priceAfterDiscount: "",
  }

  const addSystemProductSchema = yup.object({
    systemProduct: yup.string(t("forms.systemProduct.string")).required(t("forms.systemProduct.required")),
    stock: yup.string(t("forms.quantity.string")).required(t("forms.quantity.required")),
    price: yup.string(t("forms.price.string")).required(t("forms.price.required")),
    priceAfterDiscount: yup.string(t("forms.priceAfterDiscount.string")),
  })

  const addSystemProductFormik = useFormik({
    initialValues: addSystemProductInitialValues,
    validationSchema: addSystemProductSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      values.productID = systemProducts[values.systemProduct]._id
      values.categoryID = systemProducts[values.systemProduct].category
      await axios.post(`${server_url}/Products/${userType === "farm" ? "SelectFarmProduct" : userType === "supplier" && "SelectSupplierProduct"}?id=${userTypeId}`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        try {
          resetForm()
          handleAlert(t("forms.add_product_successfully.message"), "success")
          dispatch(getUserProducts())
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })


  //Edit Product
  const editUserProductInitialValues = {
    imageURL: editUserProduct && editUserProduct.product.imageURL,
    category: editUserProduct && editUserProduct.category,
    arName: editUserProduct && editUserProduct.product.arName,
    enName: editUserProduct && editUserProduct.product.enName,
    arDescription: editUserProduct && editUserProduct.product.arDescription,
    enDescription: editUserProduct && editUserProduct.product.enDescription,
    price: editUserProduct && editUserProduct.price,
    priceAfterDiscount: editUserProduct && editUserProduct.priceAfterDiscount,
    stock: editUserProduct && editUserProduct.stock,
  }

  const editUserProductSchema = yup.object({
    imageURL: yup.string(),
    category: yup.string(t("forms.category.string")).required(t("forms.category.required")),
    arName: yup.string(t("forms.arabic_name.string")).required(t("forms.arabic_name.required")),
    enName: yup.string(t("forms.english_name.string")).required(t("forms.english_name.required")),
    arDescription: yup.string(t("forms.arabic_description.string")).required(t("forms.arabic_description.required")),
    enDescription: yup.string(t("forms.english_description.string")).required(t("forms.english_description.required")),
    price: yup.string(t("forms.price.string")).required(t("forms.price.required")),
    priceAfterDiscount: yup.string(t("forms.priceAfterDiscount.string")).required(t("forms.priceAfterDiscount.required")),
    stock: yup.string(t("forms.quantity.string")).required(t("forms.quantity.required")),
  })

  const editUserSystemProductInitialValues = {
    price: editUserProduct && editUserProduct.price,
    priceAfterDiscount: editUserProduct && editUserProduct.priceAfterDiscount,
    stock: editUserProduct && editUserProduct.stock,
  }

  const editUserSystemProductSchema = yup.object({
    price: yup.string(t("forms.price.string")).required(t("forms.price.required")),
    priceAfterDiscount: yup.string(t("forms.priceAfterDiscount.string")).required(t("forms.priceAfterDiscount.required")),
    stock: yup.string(t("forms.quantity.string")).required(t("forms.quantity.required")),
  })

  const editUserProductFormik = useFormik({
    initialValues: editUserProduct && editUserProduct.product.systemProduct ? editUserSystemProductInitialValues : editUserProductInitialValues,
    validationSchema: editUserProduct && editUserProduct.product.systemProduct ? editUserSystemProductSchema : editUserProductSchema,
    onSubmit: async (values) => {
      if (userType === "client") {
        handleAlert(t("forms.fetch.public.error"), "error")
        return;
      }
      setLoading(true)
      values.productID = editUserProduct._id
      await axios.put(`${server_url}/Products/${userType === "farm" ? "UpdateFarmProduct" : "UpdateSupplierProduct"}?id=${userTypeId}`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(() => {
        try {
          dispatch(getUserProducts())
          handleCloseEditUserProductModal()
          handleClearAll()
          handleAlert(t("forms.edit_product_successfully.message"), "success")
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })



  //Create Invoice
  const createInvoiceInitialValues = {
    address: "",
    governorate: "",
    state: ""
  }

  const createInvoiceSchema = yup.object({
    address: yup.string(t("forms.address.string")).required(t("forms.address.required")),
    governorate: yup.string(t("forms.governorate.string")).required(t("forms.governorate.required")),
    state: yup.string(t("forms.state.string")).required(t("forms.state.required")),
  })

  const createInvoiceFormik = useFormik({
    initialValues: createInvoiceInitialValues,
    validationSchema: createInvoiceSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      if (!(createInvoiceData && createInvoiceData.hasOwnProperty("index") && createInvoiceData.hasOwnProperty("priceVals") && createInvoiceData.hasOwnProperty("totalAfterDiscount") && createInvoiceData.hasOwnProperty("totalValue"))) {
        handleAlert(t("forms.fetch.public.error"), "error")
        setLoading(false)
        return
      }
      console.log(cartOrders[createInvoiceData.index])
      values.seller = cartOrders[createInvoiceData.index].user.type._id
      values.totalValue = createInvoiceData.totalValue
      values.totalAfterDiscount = createInvoiceData.totalAfterDiscount
      values.products = []
      console.log(createInvoiceData.priceVals.includes(0))
      if (createInvoiceData.priceVals.includes(0)) {
        handleAlert(t("forms.cart.should_quantify_all_product.message"), "error")
        setLoading(false)
        return
      }
      cartOrders[createInvoiceData.index].products.map((pro, i) => {
        let product = {
          product: pro._id,
          price: pro.price,
          priceAfterDiscount: pro.priceAfterDiscount,
          qty: createInvoiceData.priceVals[i] / pro.price,
          totalPrice: (createInvoiceData.priceVals[i] / pro.price) * +pro.priceAfterDiscount
        };
        values.products.push(product)
      })
      await axios.post(`${server_url}/Invoices/CreateInvoice?id=${userId}`, values, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res)
        try {
          dispatch(getCartOrders())
          handleAlert(t("forms.send_create_invoice_successfully.message"), "success")
          resetForm()
        } catch (err) {
          console.log(err)
          handleAlert(t("forms.fetch.public.error"), "error")
        }
      }).catch((err) => {
        handleCatchError(err)
      })
      setLoading(false)
    }
  })

  //Delete User Product
  const handleDeleteUserProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    await axios.delete(`${server_url}/Products/${userType === "farm" ? "RemoveFarmProduct?farmID" : userType === "supplier" && "RemoveSupplierProduct?supplierID"}=${userTypeId}&productID=${deleteUserProductId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      try {
        handleAlert(t("forms.user_product.delete_successfully_message"), "success")
        handleCloseDeleteUserProductModal()
        dispatch(getUserProducts())
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "erorr")
      }
    }).catch((err) => {
      handleCatchError(err)
    })
    setLoading(false)
  }


  //Confirm Pending Sale
  const handleConfirmPendngSale = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios.post(`${server_url}/Invoices/ConfirmOrder`, { "id": pendingSaleId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      try {
        handleAlert(t("forms.pending_sale.confirm_successfully_message"), "success")
        handleCloseConfirmPendingSaleModal()
        dispatch(getPendingSales())
        dispatch(getConfirmedInvoices())
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "erorr")
      }
    }).catch((err) => {
      handleCatchError(err)
    })
    setLoading(false)
  }


  //Remove Product From Cart
  const handleRemoveProductFromCart = async (e) => {
    e.preventDefault()
    setLoading(true)
    const body = { "userID": userId, "productID": removeProductId }
    await axios.put(`${server_url}/Cart/UnselectProduct`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      try {
        handleAlert(t("forms.cart.remove_product_from_cart_successfully_message"), "success")
        dispatch(getCartOrders())
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "erorr")
      }
    }).catch((err) => {
      handleCatchError(err)
    })
    setLoading(false)
  }

  //Clear Cart
  const handleClearCart = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios.put(`${server_url}/Cart/ClearCart?id=${userId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      try {
        handleAlert(t("forms.cart.clear_cart_successfully_message"), "success")
        dispatch(getCartOrders())
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "erorr")
      }
    }).catch((err) => {
      handleCatchError(err)
    })
    setLoading(false)
  }

  return (
    <form onSubmit={type === "login" ? loginFormik.handleSubmit : (type === "supplier" || type === "farmer" || type === "client") ? registerFormik.handleSubmit : type === "contact" ? contactFormik.handleSubmit : type === "verify_otp" ? verifyOTPFormik.handleSubmit : (type === "edit_profile" || type === "change_avatar") ? editProfileFormik.handleSubmit : type === "handle_report_dates" ? handleReportDatesFormik.handleSubmit : type === "add_product" ? addSystemProduct ? addSystemProductFormik.handleSubmit : addProductFormik.handleSubmit : type === "edit_user_product" ? editUserProductFormik.handleSubmit : type === "complaint" ? complaintFormik.handleSubmit : type === "create_invoice" ? createInvoiceFormik.handleSubmit : type === "delete_user_product" ? handleDeleteUserProduct : type === "confirm_pending_sale" ? handleConfirmPendngSale : type === "remove_product_from_cart" ? handleRemoveProductFromCart : type === "clear_cart" && handleClearCart} className={`${t("lang") === "ar" ? "form_arabic" : "form_english"}`}>
      {
        type === "login" ? <LoginForm loading={loading} formik={loginFormik} /> : (type === "client" || type === "supplier" || type === "farmer") ? <RegisterForm type={type} loading={loading} formik={registerFormik} /> : type === "contact" ? <ContactForm loading={loading} formik={contactFormik} /> : type === "verify_otp" ? <VerifyOTPForm loading={loading} sendOTP={sendOTP} formik={verifyOTPFormik} /> : type === "edit_profile" ? <EditProfileForm type={userType} loading={loading} formik={editProfileFormik} /> : type === "handle_report_dates" ? <HandleReportDateForm loading={loading} formik={handleReportDatesFormik} /> : type === "change_avatar" ? <ChangeAvatarForm loading={loading} formik={editProfileFormik} /> : type === "complaint" ? <ComplaintForm loading={loading} formik={complaintFormik} /> : type === "add_product" ? addSystemProduct ? <AddSystemProductForm loading={loading} formik={addSystemProductFormik} /> : <AddProductForm loading={loading} formik={addProductFormik} /> : type === "edit_user_product" ? <EditUserProductForm loading={loading} formik={editUserProductFormik} /> : type === "create_invoice" ? <CreateInvoiceForm loading={loading} formik={createInvoiceFormik} /> : type === "delete_user_product" ? <DeleteUserProductForm loading={loading} /> : type === "confirm_pending_sale" ? <ConfirmPendingSaleForm loading={loading} /> : type === "remove_product_from_cart" ? <RemoveProductFromCartForm loading={loading} /> : type === "clear_cart" && <ClearCartForm />
      }
    </form>
  )
}

export default Forms