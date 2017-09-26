import {TodoPage} from './todo-list.po';
//import {browser, protractor} from 'protractor';

//let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
//browser.driver.controlFlow().execute = function () {
//let args = arguments;

// queue 100ms wait between test
//This delay is only put here so that you can watch the browser do its' thing.
//If you're tired of it taking long you can remove this call
//origFn.call(browser.driver.controlFlow(), function () {
//return protractor.promise.delayed(100);
// });

// return origFn.apply(browser.driver.controlFlow(), args);
//};

describe('angular-spark-lab', () => {
    let page: TodoPage;

    beforeEach(() => {
        page = new TodoPage();
    });

    it('should get and highlight Todo List attribute ', () => {
        page.navigateTo();
        expect(page.getTodoTitle()).toEqual('Todo List');
    });

    it('should type something in filter owner box and check that it returned correct element', () => {
        page.navigateTo();
        page.typeAOwner("Blanch");
        expect(page.getFirstTodo()).toEqual("The owner is: Blanche\n" +
            "\n" +
            "Has it been completed: false\n" +
            "\n" +
            "The contents: In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.\n" +
            "\n" +
            "Category: software design");
    });

    it('should select incomplete in the status dropdown and check that it returned the correct element', () => {
       page.navigateTo();
       page.getTodoByStatus("i");
       expect(page.getFirstTodo()).toEqual("The owner is: Blanche\n" +
           "\n" +
           "Has it been completed: false\n" +
           "\n" +
           "The contents: In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.\n" +
           "\n" +
           "Category: software design")
    });

    it('should type Proident cupidatat exercitation id ullamco magna do qui aliquip id. Eiusmod labore non nostrud culpa duis incididunt incididunt esse occaecat amet officia. into the body and check that it returned the correct element', () => {
       page.navigateTo();
       page.typeABody("Proident cupidatat exercitation id ullamco magna do qui aliquip id. Eiusmod labore non nostrud culpa duis incididunt incididunt esse occaecat amet officia.");
       expect(page.getFirstTodo()).toEqual("The owner is: Workman\n" +
           "\n" +
           "Has it been completed: false\n" +
           "\n" +
           "The contents: Proident cupidatat exercitation id ullamco magna do qui aliquip id. Eiusmod labore non nostrud culpa duis incididunt incididunt esse occaecat amet officia.\n" +
           "\n" +
           "Category: homework")
    });

    it('should type groceries and check that it returned the correct element', ()=>{
        page.navigateTo();
        page.typeACategory("groceries");
        expect(page.getFirstTodo()).toEqual("The owner is: Blanche\n" +
            "\n" +
            "Has it been completed: true\n" +
            "\n" +
            "The contents: Aliqua esse aliqua veniam id nisi ea. Ullamco Lorem ex aliqua aliquip cupidatat incididunt reprehenderit voluptate ad nisi elit dolore laboris.\n" +
            "\n" +
            "Category: groceries")
    });
});
