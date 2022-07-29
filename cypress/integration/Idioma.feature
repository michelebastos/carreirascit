Feature: Idioma do site

    Consultar a opção de idioma do site Ci&

Scenario: consulta em português
    Given acesse o site ciandt
    When selecione a opção PT-BR
    Then exibir a legenda PT-BR
    And exibir o menu em Português

Scenario: consulta em espanhol
    Given acesse o site ciandt
    When selecione a opção ES-CO
    Then exibir a legenda ES-CO
    And exibir o menu em Espanhol

Scenario: consulta em inglês - UK
    Given acesse o site ciandt
    When selecione a opçã EN-UK
    Then exibir a legenda EN-UK
    And exibir o menu em Inglês