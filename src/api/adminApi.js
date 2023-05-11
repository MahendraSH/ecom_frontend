const featchAllUsers = async () => {
    const url= `${process.env.REACT_APP_API_URL}/user/all`
    const response = await fetch(url);
  const data = await response.json();
  return data;
}

exports = {featchAllUsers};