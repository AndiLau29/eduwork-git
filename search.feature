Feature: Should try search field
    As a user
    I want search bank keyword

  Scenario: Search field
    Given I access zero web app
    When I enter bank keyword
    Then I should be presented search results