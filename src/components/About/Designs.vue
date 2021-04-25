<template lang="html">
<section class="section">
    <p class="p" :class="$mq">
        When designing an application, I make sure to properly utilize all
        appropriate object-oriented design principles in order
        to produce a project that is modular, maintainable, and DRY. My
        project showcase contains
        numerous examples of my deep understanding of these principles.
    </p>
    <div class="snippet-container" v-if="$mq === 'desktop'">
        <div class="snippet">
            <p class="title">
                "Monster" Battle Simulator - Java - Data Structures
            </p>
            <br />
            <pre><code class="code">// Player.java
public abstract class Player {
    // ------------- Fields ----------------------------------------
    private final String name;
    private Monster[] monsters;
    private int activeIndex = 0;  // the index of the active monster
    private Action action = null; // the next action to execute

    // ------------- Constructor -----------------------------------
    protected Player(String n, Monster[] m) {
        name = n;
        monsters = m;
        System.out.printf("\n%s selected %s, %s, and %s.\n\n", ...
    }

    // ------------- Abstract methods ------------------------------
    public abstract void chooseAction();
    public abstract boolean pickNext();

    ...</code></pre>
        </div>
        <div class="snippet">
            <pre><code class="code">// GameDriver.java
// initialise Player array
Player[] players = new Player[2];

// prompt for and store number of players
System.out.println("How many human players?\n0\t1\t2");
int numHumans = Utils.requestInt(0, 2);
int i = 0;	// index for player being set up

// ------------- Human Player Setup ----------------------------------------
while (i &lt; numHumans) {	// for each human player
	// set up the player and add it to the list of players
	players[i] = HumanPlayer.setup(i+1, NUM_MONSTERS);
	i++;	// increment player index
}

// ------------- Computer Player Setup -------------------------------------
while (i &lt; 2) { // for the rest of the players (if any)
	// set up the player and add it to the list of players
	players[i] = CPUPlayer.setup(NUM_MONSTERS);
	i++;	// increment player index
}</code></pre>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Designs'
}
</script>

<style lang="css" scoped>
</style>
