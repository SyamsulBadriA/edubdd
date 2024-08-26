Feature: Searchbox functionality

  Scenario: User searches for information and sees results
    Given the user is on the homepage
    When the user types a search term into the searchbox and submits
    Then the user should see the search results page
    And the user should verify the search results
