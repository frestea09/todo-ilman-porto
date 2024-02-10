export const removeData = (id?: string, setData?: any) => {
  setData((prevData: any) => prevData.filter((item: any) => item.id !== id));
};
