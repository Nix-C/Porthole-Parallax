# Porthole Parallax 

This JavaScript snippet can help you create parallax effects within any HTML webpage. You can layer, specify offset, and even make multiple instances of parallax objects.

## Installation

To install Porthole, add ```porthole.js``` in a script tag to your project footer.


1.  Add the class ```porthole-container``` the wrapper of your parallax content:

    ```
    <div class="porthole-container">
        <!-- Child elements -->
    </div>
    ```

2.  For each child element of ```porthole-container``` that you'd like to add the parallax effect to, add the class ```porthole```.

3.  To change the magnitude of the parallax effect, append the ```porthole``` class with ```-n``` (where ```n``` represents a multiplier of 1 view width.).
    This number can range anywhere from ```1```-```30```, our example page uses ```10``` and ```15```:

    ```
    <div class="porthole-container">
        <img href="..." class="porthole-10" />
        <img href="..." class="porthole-50" />
    </div>
    ```
