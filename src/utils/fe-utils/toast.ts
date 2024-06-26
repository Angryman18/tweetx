import toast from "react-hot-toast";

export const toastError = (val: string) => {
  toast.dismiss();
  toast.error(val);
};

export const toastSuccess = (val: string) => {
  toast.dismiss();
  toast.success(val);
};

export const defaultToast = (val: string) => {
  toast.dismiss();
  toast(val);
};
