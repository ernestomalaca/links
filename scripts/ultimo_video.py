"""Guarda en video.json el último video del canal de YouTube.

Lo corre solo GitHub Actions (ver .github/workflows/ultimo-video.yml).
Primero busca en la lista de videos largos del canal (sin Shorts);
si esa lista falla, usa el feed general del canal.
"""
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET

CANAL = "UCAAMLsl990T49prjH5WdtYw"  # youtube.com/@malacamusiclab
FEEDS = [
    "https://www.youtube.com/feeds/videos.xml?playlist_id=UULF" + CANAL[2:],
    "https://www.youtube.com/feeds/videos.xml?channel_id=" + CANAL,
]
NS = {
    "a": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
}


def ultimo(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        raiz = ET.fromstring(r.read())
    entradas = []
    for e in raiz.findall("a:entry", NS):
        vid = e.findtext("yt:videoId", namespaces=NS)
        if not vid:
            continue
        entradas.append({
            "id": vid,
            "titulo": (e.findtext("a:title", namespaces=NS) or "").strip(),
            "fecha": e.findtext("a:published", namespaces=NS) or "",
        })
    entradas.sort(key=lambda x: x["fecha"], reverse=True)
    return entradas[0] if entradas else None


def main():
    for url in FEEDS:
        try:
            v = ultimo(url)
        except Exception as err:  # el feed de videos largos a veces no existe
            print("No se pudo leer", url, "->", err)
            continue
        if v:
            with open("video.json", "w", encoding="utf-8") as f:
                json.dump(v, f, ensure_ascii=False, indent=2)
                f.write("\n")
            print("Último video:", v["titulo"], v["id"])
            return 0
    print("No se encontró ningún video; video.json queda como estaba.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
