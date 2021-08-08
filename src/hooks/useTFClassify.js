import { useState } from 'react'
import '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

export default function useTFClassify() {
    const [isLoading, setIsLoading] = useState(false)
    const [predictions, setPredictions] = useState([])
    function predict(img) {
        setIsLoading(true)
        mobilenet.load().then((model) => {
            model.classify(img).then((suggestions) => {
                setPredictions(suggestions)
                setIsLoading(false)
            })
            setIsLoading(false)
        })
    }
    return [predict, predictions, setPredictions, isLoading]
}