from pathlib import Path
import csv
from urllib.parse import quote


def parse_html_files(folder_path):
    folder = Path(folder_path)
    result = {}

    for file in folder.iterdir():
        if file.is_file() and file.suffix.lower() == ".html":
            stem = file.stem
            key = stem[-5:]
            encoded_filename = quote(file.name)
            result[key] = f"https://globalenergymonitor.github.io/smp_map/html/{encoded_filename}"

    return result


def write_dict_to_csv(data_dict, output_csv_path):
    with open(output_csv_path, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=["id", "path"])
        writer.writeheader()

        for key, value in data_dict.items():
            writer.writerow({
                "id": key,
                "path": value
            })


folder_path = "html"
output_csv_path = "id_to_url.csv"

html_dict = parse_html_files(folder_path)
write_dict_to_csv(html_dict, output_csv_path)
