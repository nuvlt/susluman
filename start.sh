#!/bin/bash

echo "🌙 Ne Kadar Müslümansın? - Test Uygulaması Başlatılıyor..."
echo ""
echo "Tarayıcınızda şu adresi açın:"
echo "http://localhost:8000"
echo ""
echo "Durdurmak için Ctrl+C tuşlarına basın"
echo ""

python3 -m http.server 8000
