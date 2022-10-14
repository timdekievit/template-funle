/// <reference types="cypress" />


describe('testing inputs for Candidates', () => {

  visitWebsite()
  moveToPersonComponent()
  checkInputsPersonComponent()
  moveToBusinessComponent()
  checkInputsBusinessComponent()
})

describe('testing Assignments', () => {
  allTestAllComponent()
  allTestFavoriteComponent()
  allTestAttentionComponent()
})

function visitWebsite() {
  it('visit website', () => {
    cy.visit('http://localhost:4200/')
  })
}

function moveToPersonComponent() {


  it('check location', () => {

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/dashboard");
    });
  })

  it('click on profile button', () => {
    cy.get('funle-portal-action-button').first().click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/profile");
    });
  })

  it('click on person button', () => {
    cy.get('funle-portal-link-button ').first().click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/profile/person");
    });
  })
}


function checkInputsPersonComponent() {
  it('check email in person.component', () => {
    cy.get('input').eq(0).should('have.value', 'timdekievit@hotmail.com')
  })

  it('check phoneNumber in person.component', () => {
    cy.get('input').eq(1).should('have.value', '0681568748')
  })

  it('check firstName in person.component', () => {
    cy.get('input').eq(3).should('have.value', 'Tim')
  })


  it('check firstName in person.component', () => {
    cy.get('input').eq(4).should('have.value', 'de')
  })

  it('check lastName in person.component', () => {
    cy.get('input').eq(5).should('have.value', 'Kievit')
  })

  it('check city in person.component', () => {
    cy.get('input').eq(6).should('have.value', 'Wassenaar')
  })
}

function moveToBusinessComponent() {

  it('click on business button', () => {
    cy.get('button').contains('Wijzig').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/profile/business");
    });
  })
}

function checkInputsBusinessComponent() {
  it('check date in business.component', () => {
    cy.get('input').eq(0).should('not.be.null')
  })

  it('check kvk in business.component', () => {
    cy.get('input').eq(1).should('be.empty')
  })

  it('check role in business.component', () => {
    cy.get('input').eq(2).should('have.value', 'Programmer')
  })

  it('check assignmentSearchRadius in business.component', () => {
    cy.get('input').eq(3).should('be.empty')
  })

  it('check hours in business.component', () => {
    cy.get('input').eq(4).should('be.empty')
  })

  it('check rate in business.component', () => {
    cy.get('input').eq(5).should('be.empty')
  })

  it('check cv in business.component', () => {
    cy.get('input').eq(6).should('have.value', 'tim_cv')
  })

  it('check defaultMotivation in business.component', () => {
    cy.get('textarea').should('have.value', 'geld')
  })
}

function moveToAllComponent() {
  it('moving to all component', () => {
    cy.contains('Opdrachten').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/all");
    });
  })
}

function checkValuesAllComponent() {
  it('check first item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor MS')

  })

  it('check second item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java Subway Amsterdam')

  })

  it('check third item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor WF')

  })

  it('check fourth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java MacDonalds Amsterdam')

  })

  it('check fith item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor Abn Amro')

  })

  it('check sixth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java Burger King Amsterdam')

  })

  it('check seventh item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor ING')

  })

  it('check eighth item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor DSB')

  })

  it('check ninth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java KFC Amsterdam')

  })

  it('check tenth item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor BoA')

  })

  it('check eleventh item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor JPM')

  })
}

function moveToAttentionComponent() {
  it('moving to attention component', () => {
    cy.contains('Uitgelicht').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/attention");
    });
  })
}

function checkValuesAttentionComponent() {
  it('check first item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor MS')

  })

  it('check second item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java Subway Amsterdam')

  })

  it('check third item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor WF')

  })

  it('check fourth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java MacDonalds Amsterdam')

  })

  it('check fith item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor Abn Amro')

  })

  it('check sixth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java Burger King Amsterdam')

  })

  it('check seventh item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor ING')

  })

  it('check eighth item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor DSB')

  })

  it('check ninth item', () => {
    cy.get('funle-portal-assignments-table').contains('Onwikkelaar Java KFC Amsterdam')

  })

  it('check tenth item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor BoA')

  })

  it('check eleventh item', () => {
    cy.get('funle-portal-assignments-table').contains('Scrum Master voor JPM')

  })
}

function checkValuesFavoriteComponent() {
  it('check first item', () => {
    cy.get('funle-portal-assignments-favorite-table').contains('Scrum Master voor Abn Amro')

  })

}


function moveToFavoriteComponent() {
  it('moving to favorite component', () => {
    cy.contains('Biedingen').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/favorite");
    });
  })
}

function checkDetailsAllComponent() {

  it('moving to first item details', () => {
    cy.contains('Scrum Master voor MS').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor MS')
  })

  moveToAllComponent()

  it('moving to second item details', () => {
    cy.contains('Onwikkelaar Java Subway Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java Subway Amsterdam')
  })

  moveToAllComponent()

  it('moving to third item details', () => {
    cy.contains('Scrum Master voor WF').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor WF')
  })

  moveToAllComponent()

  it('moving to fourth item details', () => {
    cy.contains('Onwikkelaar Java MacDonalds Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java MacDonalds Amsterdam')
  })

  moveToAllComponent()

  it('moving to fifth item details', () => {
    cy.contains('Scrum Master voor Abn Amro').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor Abn Amro')
  })

  moveToAllComponent()

  it('moving to sixth item details', () => {
    cy.contains('Onwikkelaar Java Burger King Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java Burger King Amsterdam')
  })

  moveToAllComponent()

  it('moving to seventh item details', () => {
    cy.contains('Scrum Master voor ING').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor ING')
  })

  moveToAllComponent()

  it('moving to eighth item details', () => {
    cy.contains('Scrum Master voor DSB').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor DSB')
  })

  moveToAllComponent()

  it('moving to ninth item details', () => {
    cy.contains('Onwikkelaar Java KFC Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java KFC Amsterdam')
  })

  moveToAllComponent()

  it('moving to tenth item details', () => {
    cy.contains('Scrum Master voor BoA').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor BoA')
  })

  moveToAllComponent()

  it('moving to eleventh item details', () => {
    cy.contains('Scrum Master voor JPM').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor JPM')
  })

}

function checkDetailsAttentionComponent() {

  it('moving to first item details', () => {
    cy.contains('Scrum Master voor MS').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor MS')
  })

  moveToAttentionComponent()

  it('moving to second item details', () => {
    cy.contains('Onwikkelaar Java Subway Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java Subway Amsterdam')
  })

  moveToAttentionComponent()

  it('moving to third item details', () => {
    cy.contains('Scrum Master voor WF').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor WF')
  })

  moveToAttentionComponent()

  it('moving to fourth item details', () => {
    cy.contains('Onwikkelaar Java MacDonalds Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java MacDonalds Amsterdam')
  })

  moveToAttentionComponent()

  it('moving to fifth item details', () => {
    cy.contains('Scrum Master voor Abn Amro').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor Abn Amro')
  })

  moveToAttentionComponent()

  it('moving to sixth item details', () => {
    cy.contains('Onwikkelaar Java Burger King Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java Burger King Amsterdam')
  })

  moveToAttentionComponent()

  it('moving to seventh item details', () => {
    cy.contains('Scrum Master voor ING').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor ING')
  })

  moveToAttentionComponent()

  it('moving to eighth item details', () => {
    cy.contains('Scrum Master voor DSB').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor DSB')
  })

  moveToAttentionComponent()

  it('moving to ninth item details', () => {
    cy.contains('Onwikkelaar Java KFC Amsterdam').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Onwikkelaar Java KFC Amsterdam')
  })

  moveToAttentionComponent()

  it('moving to tenth item details', () => {
    cy.contains('Scrum Master voor BoA').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor BoA')
  })

  moveToAttentionComponent()

  it('moving to eleventh item details', () => {
    cy.contains('Scrum Master voor JPM').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor JPM')
  })

}

function checkDetailsFavoriteComponent() {

  it('moving to first item details', () => {
    cy.contains('Scrum Master voor Abn Amro').click()

    cy.get('funle-portal-assignments-detail').should('contain', 'Scrum Master voor Abn Amro')
  })

  moveToFavoriteComponent()

}

function allTestAllComponent() {
  moveToAllComponent()
  checkValuesAllComponent()
  checkDetailsAllComponent()
}

function allTestAttentionComponent() {
  moveToAttentionComponent()
  checkValuesAttentionComponent()
  checkDetailsAttentionComponent()
}

function allTestFavoriteComponent() {
  moveToFavoriteComponent()
  checkValuesFavoriteComponent()
}

