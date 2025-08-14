'use client';

import { mockProjects } from '../services';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-20">
            <div className="grid gap-6 md:grid-cols-2">
                {mockProjects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-700 rounded-lg bg-gray-900 overflow-hidden"
                    >
                        {project.coverImage && (
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="p-4 space-y-3">
                            <h2 className="text-white text-xl font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-400">{project.description}</p>

                            <div className="text-sm text-gray-400 space-y-1">
                                {project.role && (
                                    <p><span className="text-gray-500">Role:</span> {project.role}</p>
                                )}
                                {project.company && (
                                    <p><span className="text-gray-500">Company:</span> {project.company}</p>
                                )}
                                {project.year && (
                                    <p><span className="text-gray-500">Year:</span> {project.year}</p>
                                )}
                            </div>

                            {Array.isArray(project.techStack) && project.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-gray-800 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex gap-4 text-sm mt-2">
                                {project.demoUrl && (
                                    <Link href={project.demoUrl} target="_blank" className="text-blue-400 hover:underline">
                                        Live Demo
                                    </Link>
                                )}
                                {project.repoUrl && (
                                    <Link href={project.repoUrl} target="_blank" className="text-blue-400 hover:underline">
                                        Source Code
                                    </Link>
                                )}
                            </div>

                            <p className="text-xs text-gray-500 mt-2">
                                Created at: {new Date(project.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;