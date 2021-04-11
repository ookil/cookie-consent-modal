export const getJSON = async (url: string) => {
  try {
    let response = await fetch(url);
    let responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    console.log(err);
  }
};
