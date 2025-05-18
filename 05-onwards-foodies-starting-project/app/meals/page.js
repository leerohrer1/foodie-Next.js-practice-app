import Link from "next/link";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

async function MealsList() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />

}

export default function Meals() {

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose a recipe</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}> 
            <MealsList />
        </Suspense>
      </main>
    </>
  );
}