package com.skillsync.backend;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RoadmapController {

    private final RoadmapService roadmapService = new RoadmapService();

    @PostMapping("/roadmap")
    public Map<String, Object> getRoadmap(@RequestBody RoadmapRequest request) {
        return roadmapService.generateRoadmap(
                request.getGoal(),
                request.getLevel(),
                request.getTime(),
                request.getPurpose());
    }
}