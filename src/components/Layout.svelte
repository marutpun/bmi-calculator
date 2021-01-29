<div class="container bmi__container">
  <div class="bmi__inner">
    <h1 class="bmi__heading">BMI calculator</h1>
    <slot />
  </div>
</div>

<style>
  .bmi__container {
    max-width: 39.375rem;
  }
  .bmi__inner {
    border: 0.25rem solid hsl(79, 100%, 36%);
  }
  .bmi__heading {
    margin: 0;
    padding: 0 1rem 0.2rem;
    background-color: hsl(79, 100%, 36%);
    color: hsl(0, 0%, 100%);
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
  }
</style>
