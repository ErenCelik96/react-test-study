import { render, screen } from "@testing-library/react";
//render: componenti render ederek çalışıp çalışmadığını test eder.
//screen: DOM üzerindeki herhangi bir şeye erişmemizi sağlar.
import userEvent from "@testing-library/user-event";
import Counter from "./index";
//userEvent: kullanıcı davranışlarını simüle eder.

describe("Counter tests", () => {
  //describe: testleri gruplamak için kullanılır.
  let count, increaseButton, decreaseButton;

  beforeEach(() => {
    //beforeEach: her test öncesi çalıştırılacak kodları içerir.
    console.log("Her testten önce çalışırım");
    render(<Counter />);
    count = screen.getByText("0"); //DOM üzerindeki text'i alır.
    increaseButton = screen.getByText("Increase"); //Increase butonunu bulduk.
    decreaseButton = screen.getByText("Decrease"); //Decrease butonunu bulduk.
  });

  beforeAll(() => {
    //beforeAll: testlerden önce bir kez çalıştırılacak kodları içerir.
    console.log("İlk başta bir kez çalışırım");
  });

  afterEach(() => {
    //afterEach: her test sonrası çalıştırılacak kodları içerir.
    console.log("Her testten sonra çalışırım");
  });

  afterAll(() => {
    //afterAll: testlerden sonra bir kez çalıştırılacak kodları içerir.
    console.log("En son bir kez çalışırım");
  });

  //it: it should be.... testi tanımlar. test() de kullanılabilir.
  it("increase button should be work", () => {
    render(<Counter />); //Counter componentini render ettik.
    userEvent.click(increaseButton); //Increase butonuna tıkladık.

    expect(count).toHaveTextContent("1"); //expect: beklediğimiz sonucu test eder. toHaveTextContent: text'i kontrol eder.
    //"The current count: 1" yazısının görünüp görünmediğini test ettik.
  });

  it("decrease button should be work", () => {
    render(<Counter />);
    userEvent.click(decreaseButton);

    expect(count).toHaveTextContent("-1");
  });
});
