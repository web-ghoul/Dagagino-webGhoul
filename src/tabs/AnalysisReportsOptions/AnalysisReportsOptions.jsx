"use client"
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MostPurchasedClientsSection from '@/sections/MostPurchasedClientsSection/MostPurchasedClientsSection';
import { PrimaryTab } from '@/muiCustomize/PrimaryTab';
import MostBoughtProductsSection from '@/sections/MostBoughtProductsSection/MostBoughtProductsSection';
import { AnalysisReportContext } from '@/context/AnalysisReportContext';
import MostBoughtFromSection from '@/sections/MostBoughtFromSection/MostBoughtFromSection';
import MostSoldProductsSection from '@/sections/MostSoldProductsSection/MostSoldProductsSection';
import Forms from '@/Forms/Forms'

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


const AnalysisReportsOptions = () => {
  const { setOption } = useContext(AnalysisReportContext)
  const [value, setValue] = useState(0)
  const { t } = useTranslation()

  const handleChange = (event, newValue) => {
    setOption(newValue)
    setValue(newValue);
  };

  return (
    <Box className={` grid jcs aic g50`}>
      <Typography variant='h4' className={`tac`}>{t("analysis_reports.title_page")}</Typography>
      <Box className={`grid jcs aic g30`}>
        <Forms type={"handle_report_dates"} />
        <Tabs variant='scrollable' scrollButtons="auto" value={value} onChange={handleChange} aria-label="scrollable auto tabs example">
          <PrimaryTab label={t("analysis_reports.most_purchased_clients.tab")} {...a11yProps(0)} />
          <PrimaryTab label={t("analysis_reports.most_sold_products.tab")} {...a11yProps(1)} />
          <PrimaryTab label={t("analysis_reports.most_brought_From.tab")} {...a11yProps(2)} />
          <PrimaryTab label={t("analysis_reports.most_brought_products.tab")} {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <MostPurchasedClientsSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MostSoldProductsSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MostBoughtFromSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <MostBoughtProductsSection />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default AnalysisReportsOptions