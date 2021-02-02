<script>
  import { addValue, resetState } from '../store/bmi';
  // binding value
  let heightInput = '';
  let weightInput = '';

  // calculate bmi
  const _calculateBmi = () => {
    addValue(heightInput, weightInput);
  };

  // reset input field
  const _resetInput = () => {
    heightInput = '';
    weightInput = '';
    resetState();
  };
</script>

<div class="bmi__form">
  <form on:submit|preventDefault={_calculateBmi}>
    <section class="bmi__form-section">
      <h2 class="bmi__form-title">Height</h2>
      <label for="bmi-cm" class="form-label bmi__label">Centimetres</label>
      <input
        type="number"
        class="form-control bmi__input"
        id="bmi-cm"
        alt="weight, centimetres"
        step="0.1"
        min="0"
        maxlength="5"
        required
        bind:value={heightInput}
      />
    </section>
    <section class="bmi__form-section">
      <h2 class="bmi__form-title">Weight</h2>
      <label for="bmi-kg" class="form-label bmi__label">Kilograms</label>
      <input
        type="number"
        class="form-control bmi__input"
        id="bmi-kg"
        alt="weight, kilograms"
        step="0.1"
        min="0"
        maxlength="5"
        required
        bind:value={weightInput}
      />
    </section>
    <section class="bmi__form-section d-flex flex-row justify-content-between">
      <button type="submit" class="btn btn-success btn-lg bmi__button--normal"
        >Calculate</button
      >
      <button
        type="reset"
        class="btn btn-link bmi__button--normal"
        on:click={_resetInput}>Reset</button
      >
    </section>
  </form>
</div>

<style>
  .bmi__form {
    padding: 1.25rem;
    background-color: hsl(0, 0%, 100%);
  }

  .bmi__form-section {
    margin: 1.25rem 0 0;
    padding: 0 0 1.75rem;
    border-bottom: 2px solid hsl(210, 10%, 81%);
  }

  .bmi__form-section:first-child {
    margin-top: 0;
  }

  .bmi__form-section:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .bmi__form-title {
    margin: 0 0 0.75rem;
    color: hsl(0, 0%, 4%);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
  }

  .bmi__label {
    margin: 0 0 0.78125rem 0;
    color: hsl(205, 20%, 37%);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    line-height: 1.24;
  }

  .bmi__input {
    border-radius: 8px;
    border: 2px solid hsl(205, 20%, 37%);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    transition: none;
  }

  .bmi__input:focus {
    margin: -1px;
    border: 3px solid hsl(205, 20%, 16%);
    outline: none;
    box-shadow: 0 0 0 3.6px rgba(255, 235, 59, 1);
  }

  .bmi__button--normal:focus {
    box-shadow: none;
  }
</style>
