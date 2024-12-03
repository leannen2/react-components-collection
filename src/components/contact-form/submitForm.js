// taken from https://www.greatfrontend.com and used axios instead of fetch
import axios from "axios";

const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

export default async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect form method value");
      return;
    }

    const formData = new FormData(form);
    // const response = await fetch(SUBMIT_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: formData.get("name"),
    //     email: formData.get("email"),
    //     message: formData.get("message"),
    //   }),
    // });
    axios
      .post(SUBMIT_URL, formData, {
        // no need to convert formData to JSON because axios does it automatically
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => alert(response.data))
      .catch((_) => alert("Error from post request"));

    //     const text = await response.text();
    //     alert(text);
  } catch (_) {
    alert("Error submitting form!");
  }
}
