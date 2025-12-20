describe ("Pizza websitesi testler", () => {
    it("Acıktım butonuna tıklayınca sipariş ver sayfasına yönlendiriyor", () => {
        cy.visit("http://localhost:5173/")
        cy.get('[data-cy="orderbutton"]').click();
        cy.url().should('include', '/order')
    })

    it("Ad soyad input alanında 4 karakterden az karakter sayısında error mesajı veriyor", () => {
        cy.visit("http://localhost:5173/order")
        cy.get('[data-cy="nameinput"]').type("abc")
        cy.contains("Adınız ve soyadınız en az 3 karakterden oluşmalıdır.")
    })

    it("Ek malzemeler alanında 4ten az seçim yapınca hata mesajı dönüyor", () => {
        cy.visit("http://localhost:5173/order")
        cy.get('input[type="checkbox"]').should("have.length",13).then(($items) => {
            return Cypress._.sampleSize($items.toArray(), 3)
        }).check({ force: true })
        cy.contains("Ek malzeme maksimum 10 minimum 4 adet ekleyebilirsiniz.")
    })

    it("Hamur kalınlığı ince,orta veya kalın olmadığı durumda hata dönüyor", () => {
        cy.visit("http://localhost:5173/order")
        cy.get('[data-cy="hamurkalınlığı"]').select("Orta")
        cy.get('[data-cy="hamurkalınlığı"]').select("--Hamur Kalınlığı--") 
        cy.contains("Hamur kalınlığı için seçim yapmalısınız.")
    })

    it("Sipariş onaylandı sayfasına başarılı bir şekilde gidiyor", () => {
        cy.visit("http://localhost:5173/")
        cy.get('[data-cy="orderbutton"]').click();
        cy.get('input[name="boyut"]').check('küçük', { force: true })
        cy.get('input[type="checkbox"]').should("have.length",13).then(($items) => {
            return Cypress._.sampleSize($items.toArray(), 5)
        }).check({ force: true})
        cy.get('[data-cy="hamurkalınlığı"]').select("Orta")
        cy.get('[data-cy="nameinput"]').type("abcdef")
        cy.get('[data-cy="ordersuccess"]').click();
        cy.url().should('include', '/success')
    })

    it.only("Sipariş onaylandı sayfasında sparişe ilgili detaylar bulunuyor", () => {
        cy.visit("http://localhost:5173/")
        cy.get('[data-cy="orderbutton"]').click();
        cy.get('input[name="boyut"]').check('küçük', { force: true })
        cy.get('input[type="checkbox"]').should("have.length",13).then(($items) => {
            return Cypress._.sampleSize($items.toArray(), 5)
        }).check({ force: true})
        cy.get('[data-cy="hamurkalınlığı"]').select("Orta")
        cy.get('[data-cy="nameinput"]').type("abcdef")
        cy.get('[data-cy="ordersuccess"]').click();
        cy.url().should('include', '/success')
        cy.contains("Boyut")
        cy.contains("Hamur")
        cy.contains("Ek Malzemeler")
        cy.contains("Notunuz")
    })

})