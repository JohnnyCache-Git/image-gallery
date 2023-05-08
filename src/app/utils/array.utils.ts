export const arrayIsNullOrEmpty = (array: object[]) => !array?.length;

export const sortByDateDesc = function (a: any, b: any) {
  var dateA = new Date(a.createdAt).getTime();
  var dateB = new Date(b.createdAt).getTime();
  return dateB - dateA;
};
