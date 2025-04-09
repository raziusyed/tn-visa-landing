"use server";

export async function handleFormSubmit(formData: FormData) {
  const email = formData.get("email");
  const userType = formData.get("userType");
  const tnCategory = formData.get("tnCategory");

  try {
    const response = await fetch("https://submit-form.com/WxUzpddyq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        userType,
        tnCategory,
      }),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
