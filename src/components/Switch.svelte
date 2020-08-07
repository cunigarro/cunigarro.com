<script>
  import { createEventDispatcher } from 'svelte';
  import { darkTheme } from './../store.js';

  let checked = false;

  const dispatch = createEventDispatcher();

  function select(event) {
    dispatch('checked', event.currentTarget.checked);
  }

  darkTheme.subscribe(value => {
    checked = value;
  })
</script>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 18px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
</style>

<label class="switch">
  <input type="checkbox" {checked} on:change={select} />
  <span class="slider" />
</label>
