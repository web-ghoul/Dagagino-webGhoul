import { SecondaryLoadingButton } from "@/muiCustomize/SecondaryLoadingButton";
import { CircularProgress } from "@mui/material";
import styles from "./LoadUploadingImage.module.scss";

const LoadUploadingImage = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <SecondaryLoadingButton
          sx={{width:"100%"}}
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        children
      )}
    </>
  );
};

export default LoadUploadingImage;
