import { visit } from "unist-util-visit";

const RESPONSIVE_MARKER = /^responsive:(\d+)x(\d+)$/;
const RESPONSIVE_SIZES =
	"(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 4rem), 880px";

export function rehypeResponsiveImage() {
	return (tree) => {
		visit(tree, "element", (node) => {
			if (node.tagName !== "img") return;

			const properties = node.properties || (node.properties = {});
			const dimensions = RESPONSIVE_MARKER.exec(String(properties.title || ""));
			const source = String(properties.src || "");
			const sourceParts = /^(.*)\.webp$/.exec(source);

			if (!dimensions || !sourceParts) return;

			properties.srcSet = [
				`${sourceParts[1]}-720.webp 720w`,
				`${sourceParts[1]}-1280.webp 1280w`,
				`${source} ${dimensions[1]}w`,
			].join(", ");
			properties.sizes = RESPONSIVE_SIZES;
			properties.width = Number(dimensions[1]);
			properties.height = Number(dimensions[2]);
			properties.loading = "lazy";
			properties.decoding = "async";
			delete properties.title;
		});
	};
}
