from PIL import Image

def image_to_nonogram_array(image_path, rows, cols, threshold=128):
    """
    Convert a nonogram image to a 2D array of 1s (black) and 0s (white).

    :param image_path: Path to the image file
    :param rows: Number of grid rows
    :param cols: Number of grid columns
    :param threshold: Grayscale threshold for black/white detection
    :return: 2D list (rows x cols)
    """

    img = Image.open(image_path).convert("L")  # Convert to grayscale
    width, height = img.size

    cell_w = width / cols
    cell_h = height / rows

    grid = []

    for r in range(rows):
        row = []
        for c in range(cols):
            # Sample center of each grid cell
            x = int((c + 0.5) * cell_w)
            y = int((r + 0.5) * cell_h)

            # Clamp to image bounds
            x = min(x, width - 1)
            y = min(y, height - 1)

            pixel = img.getpixel((x, y))

            # Black = 1, White = 0
            row.append(1 if pixel < threshold else 0)

        grid.append(row)

    return grid


def print_formatted_array(grid):
    print("[")
    for row in grid:
        print("  " + str(row) + ",")
    print("]")


# ====== USAGE ======

image_path = "test.png"   # Change to your file path
rows = 50                     # Set correct grid size
cols = 50

grid = image_to_nonogram_array(image_path, rows, cols)
print_formatted_array(grid)