"use client";

import { useActionState, useState } from "react"
import { createStartup } from "@/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      // TODO: Create a validation for formValues (schema)

      const result = await createStartup(formData);

      return result;
    } catch (error) {
      console.log(error);
      setErrors({ general: "Something went wrong" });

      return { ...prevState, error: "An error occurred", status: "ERROR" };
    }
  }

  const [, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          required
          placeholder="Startup Title"
        />

        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          required
          placeholder="Startup Description"
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />
      </div>

      <div>
        <label htmlFor="link">Image URL</label>
        <input
          id="link"
          name="link"
          required
          placeholder="Startup Image URL"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Startup"}
      </button>
    </form>
  )
}

export default StartupForm
