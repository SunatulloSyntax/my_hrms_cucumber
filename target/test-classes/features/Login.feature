@sprint1,login
Feature: Login

  @smoke
  Scenario: Valid login
    When I enter valid username and valid password
    And I click on login button
    Then I successfully logged in

  @regression
  Scenario: Invalid Login
    When I enter valid username and invalid password
    And I click on login button
    Then I see error message
    
  @smoke
  Scenario Outline: Invalid Login and message validation
    When I enter "<Usename>" and "<Password>"
    And I click on login button
    Then I see "<ErrorMessage>"

    Examples: 
      | Username | Password   | ErrorMessage             |
      | Admin    | Admin123   | Invalid credentials      |
      | Admin    |            | Password cannot be empty |
      |          | Syntax@123 | Username cannot be empty |
      |          |            | Username cannot be empty |
