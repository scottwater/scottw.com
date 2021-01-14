---
title: How to Create an FR4 Plate
date: 2021-01-14T16:06:06.572Z
uuid: 312cf15a-f4a0-48e8-9f17-cbeecfc1b946
keywords: Mechanical Keyboard,
image: /assets/images/keyboards/dxf-to-fr4/plates.jpeg
image_alt: Prime Elise FR4 Plates
draft: true
---

FR4 is one of my favorite plate materials. To me, it is the best mix of flex and stiffness. Another enduring quality is the price. It is usually very cheap[^bulk].

Unfortunately, the process for making them is not clear cut. Technically, when you order an FR4 plate, you are ordering a PCB without any components. Because of this, your typical plate file (DXF) will not suffice. You will need to create something called a [Gerber file][gerber].

> The Gerber format is an open ASCII vector format for printed circuit board (PCB) designs.It is the de facto standard used by PCB industry software to describe the printed circuit board images: copper layers, solder mask, legend, drill data, etc.[2]

I have used this process a handful of times now, and all the plates have turned out great.

## Step 1: Install and Open [KiCad][kicad]

I am sure there are other programs you could use, but this is the one I have tried.

## Step 2: Create a new project

For this sample, I will be creating a Gerber file for the wonderful Prime Elise keyboard.

## Step 3: Open the `kicad_pcb` file

In my case, this file is called `Prime Elise.kicad_pcb`

![Prime Elise.kicad file selection](/assets/images/keyboards/dxf-to-fr4/3.png)

## Step 4: Import your `dxf` file as a graphic

![Importing the dxf file as a graphic](/assets/images/keyboards/dxf-to-fr4/4a.png)

1. Ensure the graphic layer selected is `Edge.cuts`
   ![Edge.cuts](/assets/images/keyboards/dxf-to-fr4/4b.png)
2. After the file is imported, you may need to scroll out the find the graphic. IMO, regardless of the chosen placement, KiCad is not consistent.
   ![After the file is imported preview](/assets/images/keyboards/dxf-to-fr4/4c.png)

## Step 5: Add a `vias` to the imported graphic[^measure]

This is essentially the simplest component you can add to the plate to ensure the PCB producer will work with the plate. The exact placement does not matter, but I usually try to place it somewhere out of the way in the top right.

![Selecting the Vias tool and placing a plot](/assets/images/keyboards/dxf-to-fr4/5.png)

## Step 6: Click the `Plot` button

![Click plot to get going](/assets/images/keyboards/dxf-to-fr4/6.png)

## Step 7: Enter your output directory

I always use `./gerber`, which creates a folder relative to my project with the name `gerber`.

![Naming the gerber directory](/assets/images/keyboards/dxf-to-fr4/7.png)

## Step 8: Click `Generate Drill Files`

From the window in step #7, click **Generate Drill Files**

## Step 9: Click `Generate Drill Files`

This is not a type-o. The click in step #8 opened the drill file options. You now have to click the button in blue to generate the drill files.

![Clicking the second generate drill files](/assets/images/keyboards/dxf-to-fr4/8.png)

## Step 10: Close the drill file window and click `Plot`

Plot will be the <span class="text-blue-600">blue button</span> from step #7

All the default settings should be OK, but you can refer to my picture just to be safe.

## Step 11: Create your Gerber file

Go to the output directory you specified in step #7. Select all of the files (should be 12), right-click, and select compress[^windows].

![Find the files you generated](/assets/images/keyboards/dxf-to-fr4/11a.png)

On Mac, the file is always called Archive.zip. I recommend renaming this to something more appropriate so that it is easy to distinguish between uploads in the future.

![Compressing the files together](/assets/images/keyboards/dxf-to-fr4/11b.png)

## Step 12: Order your plates

There are a variety of services you can use. I have had a lot of success with [JLCPCB][jlcpcb].

All the default settings will work. The minimum order size is five, and it is generally relatively cheap to go up from there.

![JLCPCB web site](/assets/images/keyboards/dxf-to-fr4/12.png)

**One thing to note about JLCPCB**: The last couple of orders I have made all had a $15 extra work item added after submitting the order. My guess is they have figured out this is quite the bargain. It is still reasonably cheap, but keep in mind it may cost a bit more.

[^bulk]: Generally, the minimum order quantity is 5, but you can usually offload the extras, and the total cost will rarely exceed $50 shipped.
[^measure]: You can use the handy measurement tool to quickly check if some/all of your switch openings are what you would expect (14mm).
[^windows]: On windows, this may be called archive. Either way, you should have something similar, and you are free to use any third-party tool. The goal here is not compression but merely packaging.

[gerber]: https://en.wikipedia.org/wiki/Gerber_format
[kicad]: https://kicad.org/
[jlcpcb]: https://jlcpcb.com
