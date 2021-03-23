#File containes scenarios for both characters and planets
# Please comment/uncomment required section

Feature: Search for a Star Wars character/planet

Background: Go to the page
    Given I navigate to "localhost"
    
# Scenario: By full character name
#     When I search for "Luke Skywalker" 
#     Then I see details for "Luke Skywalker"

# Scenario: Not valid character name
#     When I search for "John Doe" 
#     Then I see Not found page

Scenario: By full planet name
    When I search for "Alderaan" 
    Then I see details for "Alderaan"

Scenario: Not valid planet name
    When I search for "Earth" 
    Then I see Not found page

