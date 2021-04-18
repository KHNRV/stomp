import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function Success({ success, setSuccess }) {
  const handleClose = () => {
    setSuccess({
      ...success,
      open: false,
    });
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        open={success.open}
        onClose={handleClose}
        TransitionComponent={success.Transition}
        message="Your changes have been successfully saved!"
        key={success.Transition.name}
      />
    </div>
  );
}
