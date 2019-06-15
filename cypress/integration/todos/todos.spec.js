describe("TODO List", () => {

  beforeEach("Borrar datos", () => {
    // Antes de cada test remueve todos los datos
    cy.request("DELETE", "/api/todos")
  })

  describe("Una vez cargada la pagina", () => {
    beforeEach("Cargar la pagina", () => {
      cy.visit("/")
    });

    it("debe mostrar los elementos de la pagina", () => {
      cy.get(".add-todo-form input")
      cy.get(".add-todo-form .add-todo")

      cy.get(".visibilityLinks")

      cy.get(".todo-list")
    })

    it("debe permitir agregar un todo con el formulario", () => {
      cy.addTodo("probar cypress");
      cy.getTodo("probar cypress");
    })

    it("debe permitir poner un todo con done", () => {
      const todo = "hacer algo para poner como done";
      cy.addTodo(todo);
      cy.getTodo(todo).click();

      cy.get(".todo-list").should("be.empty");
    })

    it("debe permitir cambiar visibilidad y ver los hechos", () => {
      const todo = "todo hecho";
      cy.addTodo(todo);
      cy.getTodo(todo).click();

      const notDone = "no hecho";
      cy.addTodo(notDone)

      cy.getTodo(notDone)
      
      cy.get(".todo-list").should("not.contain", todo);

      cy.changeVisibility("Done");

      cy.getTodo(todo)
      cy.get(".todo-list").should("not.contain", notDone);
      
      cy.changeVisibility("All");

      cy.getTodo(todo).parent().should("have.class", "done");
      cy.getTodo(notDone).parent().should("not.have.class", "done");
    })
  })

})