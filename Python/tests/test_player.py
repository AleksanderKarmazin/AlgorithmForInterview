from Python.src.algo_tests.player import Player


def test_player():
    p = Player("Y", "O")
    assert "Y" == p.first_name
