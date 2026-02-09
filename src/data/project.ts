import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft projects based on the environment */
export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
	return await getCollection("project", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** groups projects by year (based on publishDate), using the year as the key
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 */
export function groupProjectsByYear(projects: CollectionEntry<"project">[]) {
	return Object.groupBy(projects, (project) => project.data.publishDate.getFullYear().toString());
}

/** returns all tags created from projects (inc duplicate tags)
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 */
export function getAllProjectTags(projects: CollectionEntry<"project">[]) {
	return projects.flatMap((project) => [...project.data.tags]);
}

/** returns all unique tags created from projects
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 */
export function getUniqueProjectTags(projects: CollectionEntry<"project">[]) {
	return [...new Set(getAllProjectTags(projects))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 */
export function getUniqueProjectTagsWithCount(projects: CollectionEntry<"project">[]): [string, number][] {
	return [
		...getAllProjectTags(projects).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
