import toast from "react-hot-toast";

export const toastLoading = (val: string) => {
  if (typeof val !== "string") return toast.loading("Please Wait...");
  toast.dismiss();
  toast.loading(val);
};

export const toastError = (val: string) => {
  if (typeof val !== "string") return toast.error("Something went wrong");
  toast.dismiss();
  toast.error(val);
};

export const toastSuccess = (val: string) => {
  if (typeof val !== "string") return toast.success("Success!");
  toast.dismiss();
  toast.success(val);
};

export const defaultToast = (val: string) => {
  if (typeof val !== "string") return toast("There is something fishy!");
  toast.dismiss();
  toast(val);
};
