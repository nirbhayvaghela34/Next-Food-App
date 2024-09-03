"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidInput(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(preState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (isInvalidInput(meal.title)) {
    return {
      message: 'Invalid title.'
    };
  }
  if (isInvalidInput(meal.summary)) {
    return {
      message: 'Invalid summary.'
    };
  }
  if (isInvalidInput(meal.instructions)) {
    return {
      message: 'Invalid instructions.'
    };
  }
  if (isInvalidInput(meal.creator)) {
    return {
      message: 'Invalid name.'
    };
  }
  if (isInvalidInput(meal.creator_email) || !meal.creator_email.includes("@")) {
    return {
      message: 'Invalid email.'
    };
  }
  if (!meal.image || meal.image.size === 0) {
    return {
      message: 'Invalid image.'
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals', 'layout');
  redirect("/meals");
}
