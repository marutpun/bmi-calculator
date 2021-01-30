<script>
  let bmiValue = 27.1;
  let minWeight = 58.6;
  let maxWeight = 79.2;
</script>

<div class="bmi__result">
  <header class="bmi__header">
    <p class="bmi__title">BMI</p>
    <p class="bmi__value">{bmiValue}</p>
  </header>
  <p class="bmi__caption">
    Healthy weight range for your height:<br />{minWeight}kg - {maxWeight}kg
  </p>
  <div class="bmi__info">
    <p>
      Gradually losing just 5% of your weight will significantly reduce your
      risk of health problems.
    </p>
    <p>
      We've got lots of resources to help you lose weight safely. If you're
      concerned about your weight speak to your GP.
    </p>
    <p class="bmi__guide">Aim to lose 4.3kg</p>
  </div>
</div>

<style>
  .bmi__result {
    padding: 1.25rem;
    background-color: hsl(0, 0%, 100%);
  }

  .bmi__result p {
    font-family: 'Open Sans', sans-serif;
  }

  .bmi__header {
    background-color: hsl(195, 17%, 95%);
    padding: 1.875rem 3.125rem;
    border-top: 0.5rem solid hsl(206, 10%, 86%);
  }

  .bmi__title {
    margin: 0;
    color: hsl(205, 20%, 37%);
    font-size: 1.375rem;
    line-height: 1.25;
    text-align: center;
  }

  .bmi__value {
    margin: 0;
    color: hsl(205, 20%, 16%);
    font-size: 3.5rem;
    line-height: 1.5;
    text-align: center;
  }

  .bmi__caption {
    margin-top: 1.25rem;
    font-size: 1.1875rem;
    text-align: center;
  }

  .bmi__info {
    padding: 1.875rem;
    border-top: 0.25rem solid hsl(79, 100%, 36%);
    background-color: hsl(192, 20%, 95%);
  }

  .bmi__info p {
    color: hsl(205, 20%, 16%);
    font-size: 1.25rem;
    line-height: 1.75;
  }

  .bmi__guide {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.5;
  }
</style>
