import { PrimaryLoadingButton } from "@/muiCustomize/PrimaryLoadingButton";
import { CircularProgress } from "@mui/material";
import styles from "./LoadButton.module.scss";
import { DeleteLoadingButton } from "@/muiCustomize/DeleteLoadingButton";

const LoadButton = ({ loading, children, deleted }) => {
  return (
    <>
      {loading ? deleted ? (
        <DeleteLoadingButton
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        <PrimaryLoadingButton
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

export default LoadButton;
