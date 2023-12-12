"use client"
import {useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {Tabs , Box} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PrimaryTab } from '@/muiCustomize/PrimaryTab';
import styles from "./DashboardOptions.module.scss"
import { DashboardContext } from '@/context/DashboardContext';
import UserProductsSection from '../../sections/UserProductsSection/UserProductsSection';
import PendingSalesSection from '../../sections/PendingSalesSection/PendingSalesSection';
import ConfirmedInvoicesSection from '../../sections/ConfirmedInvoicesSection/ConfirmedInvoicesSection';
import PendingPurchasesSection from '../../sections/PendingPurchasesSection/PendingPurchasesSection';
import ConfirmedPurchasesSection from '../../sections/ConfirmedPurchasesSection/ConfirmedPurchasesSection';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const DashboardOptions = () => {
  const {setDashboardOption} = useContext(DashboardContext)
  const [value, setValue] = useState(0)
  const {t} = useTranslation()

  const handleChange = (event, newValue) => {
    setDashboardOption(newValue)
    setValue(newValue);
  };

  return (
    <Box className={`${styles.dashboard_options_box} grid jcs aic g30`}>
      <Tabs className={`${styles.tabs}`} value={value} onChange={handleChange} aria-label="basic tabs example">
        <PrimaryTab label={t("dashboard.current_products.tab")} {...a11yProps(0)} />
        <PrimaryTab label={t("dashboard.add_new_product.tab")} {...a11yProps(1)} />
        <PrimaryTab label={t("dashboard.pending_sales.tab")} {...a11yProps(2)} />
        <PrimaryTab label={t("dashboard.confirmed_invoices.tab")} {...a11yProps(3)} />
        <PrimaryTab label={t("dashboard.pending_purchases.tab")} {...a11yProps(4)} />
        <PrimaryTab label={t("dashboard.confirmed_purchases.tab")} {...a11yProps(5)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <UserProductsSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PendingSalesSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ConfirmedInvoicesSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <PendingPurchasesSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ConfirmedPurchasesSection/>
      </CustomTabPanel>
    </Box>
  );
}

export default DashboardOptions