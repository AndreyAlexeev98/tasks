// №1
// Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.
function renderInputsValue({
  inputs,
  paragraph,
  btn,
}: {
  inputs: NodeListOf<HTMLInputElement> | null;
  paragraph: HTMLParagraphElement | null;
  btn: HTMLButtonElement | null;
}): void {
  btn?.addEventListener("click", () => {
    let sum: number = 0;

    inputs?.forEach((input) => {
      const value = Number(input.value);
      if (!isNaN(value)) {
        sum += value;
      }
    });

    if (paragraph) {
      paragraph.textContent = String(sum);
    }
  });
}

// №2
// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// №3
// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// №4
// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.

// №5
// Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.
