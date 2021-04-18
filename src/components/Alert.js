import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function Alert({ alert, setAlert }) {
  const handleClose = () => {
    setAlert({
      ...alert,
      open: false,
    });
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        open={alert.open}
        onClose={handleClose}
        TransitionComponent={alert.Transition}
        message="Cannot delete this person: Already in a competition! Please remove from competition first."
        key={alert.Transition.name}
      />
    </div>
  );
}
