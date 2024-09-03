"use client";

import { useFormState } from 'react-dom';
import ImagePicker from '@/component/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/component/meals/meals-form-submit';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            {state.message === 'Invalid name.' && <p className={classes.error}>Please provide a valid name.</p>}
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
            {state.message === 'Invalid email.' && <p className={classes.error}>Please provide a valid email address.</p>}
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          {state.message === 'Invalid title.' && <p className={classes.error}>Please provide a valid title.</p>}
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          {state.message === 'Invalid summary.' && <p className={classes.error}>Please provide a valid summary.</p>}
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {state.message === 'Invalid instructions.' && <p className={classes.error}>Please provide valid instructions.</p>}
          <ImagePicker label="Your image" name="image" />
          {state.message === 'Invalid image.' && <p className={classes.error}>Please provide a valid image.</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
