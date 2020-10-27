from colorama import Fore
import random

game_genres = [
    "tactics strategy",
    "real time strategy",
    "platformer",
    "rogue-like",
    "mmo rpg",
    "rpg",
    "shoot'em up",
    "race",
    "first person shooter",
    "arcade",
    "street fighter",
]
game_mechanics = [
    "duel",
    "card game",
    "steal the flag",
    "tower defense",
    "survive to the end",
    "find all items",
    "with timer",
    "build structures",
    "build your player",
    "sandbox",
    "procedural generated",
    "investigation",
    "manage your shop",
    "manage your vehicle",
    "must co-op",
]
game_themes = [
    "medieval",
    "fantasy",
    "non sense",
    "japanese",
    "hi-tech",
    "modern",
    "abstract",
    "steampunk",
    "cyberpunk",
    "egypt",
    "arabic",
    "vintage",
    "dark fantasy",
]

ludum_dare_ideas = [
    "Decay",
    "Layers",
    "Control the world, not the player",
    "Nomad",
    "Connections",
    "Stuck in a loop",
    "Feeding the monster",
    "Delay the inevitable",
    "Contain it",
    "Day and night",
    "Shipwrecked",
    "Clockwork",
    "You cant save them all",
    "Death is not the end",
    "Summoning",
    "The world changes when you are not looking",
]


def format_colored(string, *args, **kwargs):
    return string.format(*args, **kwargs, green=Fore.GREEN, blue=Fore.BLUE, yellow=Fore.YELLOW, reset=Fore.RESET)


selected = ""
while selected.lower() != "n":
    print(Fore.GREEN)
    print("/******** GAME IDEA GENERATOR **************/")
    print("/* Options:")
    print("/* l -> pick a random ludum dare theme")
    print("/* m -> mix a random game genre + mechanic + theme")
    print("/* n -> exit")
    selected = input(f"{Fore.YELLOW} Enter an option: {Fore.RESET}")

    if selected.lower() == "l":
        print("\nHERE IS A RANDOM LUDUM DATE THEME:")
        print(random.choice(ludum_dare_ideas))
    elif selected.lower() == "m":
        n_mechanic = ""
        print(Fore.BLUE)
        while n_mechanic not in list(map(str, range(1, 10))):
            n_mechanic = input(f"\nHow many game mechanics? (number) {Fore.RESET}")
        selec_genre = random.choice(game_genres)
        selec_mechanic = []
        for n in range(int(n_mechanic)):
            selec_mechanic.append(random.choice(game_mechanics))
        selec_theme = random.choice(game_themes)
        print("\nHERE IS A RANDOM GAME IDEIA:")
        print(format_colored("{green}{2} {blue}{1} {yellow}{0}{reset}", selec_genre, ", ".join(selec_mechanic), selec_theme))
    elif selected != "n":
        print("INVALID OPTION")
    input(f"\n{Fore.LIGHTBLACK_EX}[PRESS ANY KEY]{Fore.RESET}")
    print("\n\n\n\n\n")

print("GOOD BYE")
