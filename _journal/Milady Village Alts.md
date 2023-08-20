---
published: true
subtitle:
date: 2023-07-24
tags:
foam_template:
  filepath: '_journal/2023-07-on-milady-village-alts.md'
  name: Journal Entry
---

# Milady Village Alts

Just me trying the graphviz module

{% graphviz %}

digraph G {

    rankdir=LR;

    SPRITE [color="#FF0000"]
    TERESA [color="#0000FF"]
    EXAMPLE [color="#008000"]
    TOSU [color="#FFFF00"]
    AVUNIT [color="#FFA500"]
    BIMPS [color="#000000"]
    STRAWBIEATOR [color="#A52A2A"]
    OYASUMINASAI [color="#800080"]
    BLACK [color="#808080"]
    INTERNETFRIEND [color="#FFD700"]
    "MILADY TELEVISION" [color="#FFC0CB"]
    KRUTON [color="#808080"]
    DJINNT [color="#F0E68C"]
    MIRO [color="#00FFFF"]
    YAMON [color="#FF00FF"]
    YAMBO [color="#000080"]
    CHARLIE [color="#800000"]
    BLOWRACK [color="#DDA0DD"]
    HATCHET9K [color="#00FF00"]
    FLAN [color="#FF7F50"]
    FORESKIN [color="#7FFFD4"]
    VIBESHIFT [color="#808000"]
    SNAILMAIL [color="#A0522D"]
    SUNNY [color="#008080"]
    CCCCAA13 [color="#DA70D6"]
    YOJIMBO [color="#FA8072"]
    HAF [color="#2E8B57"]
    HALFPRINT [color="#C0C0C0"]
    MIYA [color="#D2B48C"]
    ALANE [color="#D8BFD8"]
    RAVEN [color="#FF69B4"]
    SCORCH [color="#4B0082"]
    DRAGOVIC [color="#4B0082"]
    "IKEDA TERESA (NOGIZAKA46)" [color="#800080"]
    "KAWASAKI SAKURA (NOGIZAKA46)" [color="#FF69B4"]
    "BING-BONG" [color=green]
    PEP [color=blue]
    FRENZY [color=white]
    APOCALYPSE [color=yellow]
    BIMPS [color=orange]
    BEEP [color=green]
    BOMBAGUMBA [color=blue]
    
    RAYOS [color=red]
    SNEED [color=yellow]
    "!PENGUIN" [color=darkgreen]
    
    
    "KAWASAKI SAKURA (NOGIZAKA46)" -> SPRITE [color=green]
    "KAWASAKI SAKURA (NOGIZAKA46)" -> CHARLIE [color=green]
    "IKEDA TERESA (NOGIZAKA46)" -> TERESA [color=green]
    "IKEDA TERESA (NOGIZAKA46)" -> "MILADY TELEVISION" [color=green]
    INTERNETFRIEND -> TERESA [color=green]
    INTERNETFRIEND -> TOSU [color=red]
    INTERNETFRIEND -> SPRITE [color=red]

    SPRITE -> TERESA [color=green]
    SPRITE -> EXAMPLE [color=red]
    SPRITE -> TOSU [color=red]

    TOSU -> TERESA [color=green]
    TOSU -> EXAMPLE [color=green]

    EXAMPLE -> TERESA [color=red]
    
    AVUNIT -> BEEP [color=green]
    BEEP -> STRAWBIEATOR [color=green]
    STRAWBIEATOR -> AVUNIT [color=green]
    BEEP -> TERESA [color=orange]
    BEEP -> BIMPS [color=red]
    
    BLACK -> OYASUMINASAI [color=orange]
    
    "MILADY TELEVISION" -> TERESA [color=green]
    "MILADY TELEVISION" -> SPRITE [color=red]
    
    KRUTON -> DJINNT [color=orange]
    
    YAMON -> YAMBO [color=orange]
    YAMON -> MIRO [color=orange]
    YAMON -> BLOWRACK [color=orange]
    YAMBO -> MIRO [color=orange]
    MIRO -> BLOWRACK [color=orange]
    BLOWRACK -> HATCHET9K [color=orange]
    HATCHET9K -> YAMON [color=orange]
    MIRO -> HATCHET9K [color=orange]
    MIRO -> BLOWRACK [color=orange]
    
    CHARLIE -> TOSU [color=red]
    CHARLIE -> SPRITE [color=red]
    CHARLIE -> YOJIMBO [color=orange]
    CHARLIE -> CCCCAA13 [color=orange]
    SPRITE -> YOJIMBO [color=red]
    SPRITE -> CCCCAA13 [color=red]
    SPRITE -> RAVEN [color=red]
    RAVEN -> YOJIMBO [color=red]
    
    FLAN -> FORESKIN [color=orange]
    
    SUNNY -> MIYA [color=green]
    SUNNY -> CHARLIE [color=red]
    CHARLIE -> MIYA [color=green]
    
    VIBESHIFT -> SNAILMAIL [color=green]
    VIBESHIFT -> ALANE [color=orange]
    
    HAF -> HALFPRINT [color=red]
    HALFPRINT -> HAF [color=green]

    SCORCH -> DRAGOVIC [color=green]
    SCORCH -> CHARLIE [color=orange]
    RENN -> TOSU [color=orange]
    
    "SATOSHI NAKAMOTO" -> CHARLIE [color=orange]
    FAYE -> TOSU [color=green]
    FAYE -> TERESA [color=red]
    
    "BING-BONG" -> PEP [color=orange]
    PEP -> "BING-BONG" [color=orange]

    BOMBAGUMBA -> TERESA [color=orange]
    SNEED -> KRUTON [color=orange]
    SNEED -> "!PENGUIN" [color=green]
    RAYOS -> KRUTON [color=orange]
    RAYOS -> SNEED [color=orange]
    FRENZY -> APOCALYPSE [color=orange]
    FRENZY -> PEP [color=red]
    APOCALYPSE -> PEP [color=orange]
    PEP -> UM [color=orange]
    UM -> SPRITE [color=green]
    UM -> TERESA [color=orange]
    
}


{% endgraphviz %}