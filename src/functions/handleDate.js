export const handleDate = (date, lang) =>{
const [year, month, day] = date.split('T')[0].split('-');
const parsedDate = new Date(year, month - 1, day);
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = parsedDate.toLocaleDateString(`${lang === "ar" ? "ar-EG" : "en-US"}`, options);
  return formattedDate
}