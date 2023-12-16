import { useTranslation } from "react-i18next";
import LoadButton from "@/components/LoadButton/LoadButton";
import { DeleteButton } from "../muiCustomize/DeleteButton";

const RemoveProductFromCartForm = ({ loading }) => {
  const { t } = useTranslation()
  return (
    <LoadButton loading={loading}>
      <DeleteButton type={"submit"}>{t("forms.remove_product_from_cart.button.text")}</DeleteButton>
    </LoadButton>
  )
}

export default RemoveProductFromCartForm
