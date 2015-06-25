# steam-avg-pct-cli
A simple way to get steam stats. Eventually I'd like to make a web UI, but until Steam removes the following clause from their [Terms of Use](http://steamcommunity.com/dev/apiterms), or makes a "shareable" API key system, that can't easily happen (everyone would need to register their own API key, worst case).

> You agree to keep your Steam Web API key confidential, and not to share it with any third party. This license is personal to you and specific to your Application. You agree that you will be personally responsible for the use of your Steam Web API key.

## Pre-requisites:

* nodejs

## Usage:

* Download the repository (via `git clone` or download zip)
* Run `npm install`
* [Obtain an API key from Steam](http://steamcommunity.com/dev/apikey)
* Run `node index.js --api-key=XXX --vanity-url=yourvanityurl` or `node index.js --api-key=XXX --steam-id=yoursteam64bitid`

## Sample Output
```
$ node index.js --api-key=XXX --vanity-url=seiyria
Resolving vanity url "seiyria"...
Getting games for steam64id: 76561197998412147...
Found games: 416 (not all of these will count)
Found 95 games that count for Avg. Completion Rate, sorting...

Your average percent: 29%

Games below the average (sorted by easiest to boost, numerically):
                                Adventures of Shuggy: 3/13      23.08%
                                              Monaco: 2/13      15.38%
                                     Worms Clan Wars: 3/14      21.43%
                                       Tower of Guns: 4/17      23.53%
                                      Frozen Synapse: 2/16      12.50%
                                             Rochard: 3/18      16.67%
                                      Dungeon Hearts: 2/17      11.76%
                                        Lost Marbles: 2/17      11.76%
                                                Cogs: 1/18      5.56%
                                              Wizorb: 2/20      10.00%
                             Scribblenauts Unlimited: 4/25      16.00%
                                    Puzzle Dimension: 3/25      12.00%
                                Legends of Aethereus: 1/23      4.35%
                                             Shatter: 7/30      23.33%
                              Stealth Bastard Deluxe: 4/27      14.81%
                                   Tiny Barbarian DX: 4/27      14.81%
                                            Dwarfs!?: 5/29      17.24%
                                    Orcs Must Die! 2: 3/27      11.11%
                            Crypt of the NecroDancer: 2/28      7.14%
                                 Wanderlust: Rebirth: 3/30      10.00%
                                           Foul Play: 3/30      10.00%
                                          I am Bread: 8/35      22.86%
                                               Trine: 4/33      12.12%
                                        Pixel Piracy: 1/30      3.33%
                                  Blocks That Matter: 1/32      3.13%
Half Minute Hero: Super Mega Neo Climax Ultimate Boy: 3/35      8.57%
                                 Runespell: Overture: 1/35      2.86%
                                          Tower Wars: 1/35      2.86%
                                       Hotline Miami: 1/35      2.86%
                                         Hammerwatch: 4/40      10.00%
                                Atom Zombie Smasher : 4/41      9.76%
                                        Just Cause 2: 12/50     24.00%
                                          Gauntlet™ : 5/43      11.63%
                                          Hero Siege: 9/51      17.65%
                                      Sleeping Dogs™: 16/59     27.12%
                                      Super Meat Boy: 4/48      8.33%
                                              KRUNCH: 4/51      7.84%
                                     One Way Heroics: 11/59     18.64%
                                       Darksiders II: 1/50      2.00%
                                          Torchlight: 16/66     24.24%
                                         Alien Swarm: 15/66     22.73%
                                         Left 4 Dead: 15/73     20.55%
                                      Worms Reloaded: 1/61      1.64%
                                         Beat Hazard: 1/63      1.59%
                                             Magicka: 25/88     28.41%
                                         Rhythm Zone: 10/80     12.50%
                               Saints Row: The Third: 3/83      3.61%
                                The Binding of Isaac: 2/99      2.02%
                                             Sanctum: 1/100     1.00%
                                                Reus: 16/123    13.01%
                                               HOARD: 9/129     6.98%
                             A Valley Without Wind 2: 1/210     0.48%
                          Sid Meier's Civilization V: 34/287    11.85%
                                       Killing Floor: 21/285    7.37%

Games above (or at) the average (sorted by easiest to boost, numerically):
                                             bit Dungeon II: 13/15     86.67%
                                                  Eversion : 11/14     78.57%
                                                        140: 3/6       50.00%
                                           Cities: Skylines: 29/33     87.88%
                             Grotesque Tactics: Evil Heroes: 4/10      40.00%
                                                  Papo & Yo: 4/10      40.00%
                                               Rogue Legacy: 21/28     75.00%
                                                    Nidhogg: 5/12      41.67%
                                                       Pid : 4/12      33.33%
                                                     Portal: 6/15      40.00%
                                                      Chime: 6/15      40.00%
                                                  DLC Quest: 13/22     59.09%
                                        TowerFall Ascension: 20/29     68.97%
                                    Vertical Drop Heroes HD: 19/30     63.33%
                                             SteamWorld Dig: 12/24     50.00%
                                                    Bastion: 9/24      37.50%
                                        Pillars of Eternity: 16/31     51.61%
BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien: 10/26     38.46%
                                          Quantum Conundrum: 8/25      32.00%
                                          Mark of the Ninja: 21/38     55.26%
                             Super Puzzle Platformer Deluxe: 27/44     61.36%
                                              Shovel Knight: 27/45     60.00%
                                                  La-Mulana: 44/64     68.75%
                                                 Transistor: 10/33     30.30%
                                                      Thief: 13/37     35.14%
                                                   Portal 2: 26/51     50.98%
                                             State of Decay: 20/46     43.48%
                                                   Gunpoint: 15/42     35.71%
                                                 Dishonored: 51/80     63.75%
                                             Goat Simulator: 58/87     66.67%
                                          Dungeon Defenders: 73/104    70.19%
                                              Borderlands 2: 33/69     47.83%
                                                Borderlands: 33/80     41.25%
                                              Left 4 Dead 2: 22/70     31.43%
                                              Torchlight II: 70/119    58.82%
                                Defense Grid: The Awakening: 35/87     40.23%
                                      A Valley Without Wind: 32/98     32.65%
                                                    Trine 2: 30/97     30.93%
                                            Team Fortress 2: 156/513   30.41%
```