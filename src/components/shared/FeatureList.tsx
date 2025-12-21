interface FeatureListProps {
	title: string;
	items: string[];
}

export function FeatureList({ title, items }: FeatureListProps) {
	return (
		<div className="space-y-4 mb-8">
			<div>
				<h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
				<ul className="space-y-2 text-muted-foreground">
					{items.map((item) => (
						<li key={item} className="flex items-start gap-2">
							<span className="text-primary mt-1">•</span>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
