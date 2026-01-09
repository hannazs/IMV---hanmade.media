# Hanmade Media – Portfolio

## Kurzbeschreibung
In meinem letzten IM-Projekt ging es für mich vor allem darum, das bisher Gelernte aufzufrischen. Gleichzeitig wollte ich mir für die anstehende Jobsuche eine eigene Portfolio-Website bauen. Mir war dabei wichtig, nicht nur meine Arbeiten zu zeigen, sondern auch meinen Charakter und Stil mit einzubringen. So ist [hanmade.media](https://hanmade.media) entstanden (klicken für Live Version): Ein persönliches, handgezeichnetes Portfolio mit interaktiven Elementen.

## Schwierigkeiten
- Das Positionieren von Bildern und Texten in Relation zueinander war komplex, vor allem mit vielen absolut platzierten Elementen.  
- Der Zeichenmodus mit Canvas war technisch sehr anspruchsvoll für mich: Das Canvas musste über die ganze Seite gehen und wie ein Bleistift wirken. Probleme mit CSS-Pixeln vs. physischen Pixeln machten Berechnungen nötig. Dabei haben mir ChatGPT und Copilot viel geholfen.  
- Ich habe in Chrome entwickelt und erst später in Safari getestet. Dort haben viele Dinge anders funktioniert und ich musste zusätzliche Media Queries einbauen, damit alles sauber aussah.  
- Einige Bilder (vor allem auf der Projektseite) waren in Safari plötzlich umgedreht. Der Fehler lag an falsch exportierten Bilddaten. Lösen konnte ich das schliesslich mit `image-orientation: none;`.

## Learnings
- Ich konnte mein HTML- und CSS-Wissen deutlich auffrischen, vor allem zu absoluter Positionierung und Media Queries.  
- Das Arbeiten mit dem HTML-Canvas war neu für mich. Mit Hilfe von ChatGPT habe ich eine Lösung für den Zeichenmodus gebaut und viel über Canvas und Pointer Events gelernt.  
- Ich habe gemerkt, wie wichtig der `meta viewport`-Tag für Responsive Design ist. Ohne ihn sah die Seite auf Mobile komplett falsch aus – mit ihm wurde vieles sofort einfacher.
- Ich habe komplett vergessen, mein Repository am Anfang aufzusetzen und es erst am Schluss erstellt. Das war ein wichtiges Learning für zukünftige Projekte. 

## Ressourcen
- HTML, CSS, JavaScript  
- Canvas API
- Figma 
- Procreate (für meine Illustrationen)
- Adobe Fonts 
- ChatGPT  
- GitHub Copilot  

## Projekt Setup (lokal)
- Repository klonen  
- `php -S localhost:1234` ausführen  
- `localhost:1234` im Browser öffnen 
